package com.it.mixerconfig;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SampleRestController {

    @GetMapping("/config")
    public ResponseEntity<String> config() {
        return ResponseEntity.ok("ciao config");
    }

}
