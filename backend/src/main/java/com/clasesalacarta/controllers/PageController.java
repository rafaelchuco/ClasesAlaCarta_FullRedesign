
package com.clasesalacarta.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PageController {

    @GetMapping("/inicio")
    public String inicio() {
        return "inicio.html";
    }

    @GetMapping("/cursos")
    public String cursos() {
        return "cursos.html";
    }

    @GetMapping("/simulacros")
    public String simulacros() {
        return "simulacros.html";
    }

    @GetMapping("/certificaciones")
    public String certificaciones() {
        return "certificaciones.html";
    }

    @GetMapping("/foro")
    public String foro() {
        return "foro.html";
    }

    @GetMapping("/soporte")
    public String soporte() {
        return "soporte.html";
    }
}
