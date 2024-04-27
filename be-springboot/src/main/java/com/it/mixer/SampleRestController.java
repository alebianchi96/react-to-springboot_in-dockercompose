package com.it.mixer;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SampleRestController {

    @GetMapping("/ciao")
    public ResponseEntity<String> ciao() {
        return ResponseEntity.ok("ciao bello");
    }

}
