import { auth, db } from "./firebase-config.js";

import {
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

import {
    doc,
    getDoc
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

window.currentUserData = null;

window.initAuthGuard = (allowedRoles = []) => {

    // 👑 SOPORTE PARA CONTRASEÑA MAESTRA
    if (sessionStorage.getItem("master_session") === "true") {

        const userRole =
            sessionStorage.getItem("master_role") || "";

        const data = {
            rol: userRole
        };

        window.currentUserData = data;

        if (
            allowedRoles.length &&
            !allowedRoles.includes(userRole)
        ) {
            location.href = "index.html";
            return;
        }

        document.body.style.display = "block";

        document.dispatchEvent(
            new CustomEvent(
                "authReady",
                {
                    detail: {
                        user: {
                            email: sessionStorage.getItem("user_email")
                        },
                        data,
                        role: userRole
                    }
                }
            )
        );

        return;
    }

    onAuthStateChanged(
        auth,
        async (user) => {

            if (!user) {
                location.href = "index.html";
                return;
            }

            try {

                const userRef =
                    doc(db, "users", user.uid);

                const snap =
                    await getDoc(userRef);

                if (!snap.exists()) {
                    location.href = "index.html";
                    return;
                }

                const data = snap.data();

                window.currentUserData = data;

                const userRole =
                    data.rol ||
                    data.role ||
                    "";

                if (
                    allowedRoles.length &&
                    !allowedRoles.includes(userRole)
                ) {
                    location.href = "index.html";
                    return;
                }

                document.body.style.display = "block";

                document.dispatchEvent(
                    new CustomEvent(
                        "authReady",
                        {
                            detail: {
                                user,
                                data,
                                role: userRole
                            }
                        }
                    )
                );

            } catch (error) {

                console.error(
                    "Error en auth-guard:",
                    error
                );

                location.href = "index.html";
            }
        }
    );
};