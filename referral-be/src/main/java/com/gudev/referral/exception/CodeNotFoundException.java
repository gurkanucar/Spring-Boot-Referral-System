package com.gudev.referral.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class CodeNotFoundException extends RuntimeException {
    public CodeNotFoundException(String message) {
        super(message);
    }
}
