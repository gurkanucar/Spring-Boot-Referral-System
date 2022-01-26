package com.gudev.referral.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_ACCEPTABLE)
public class MaxPersonCountException extends RuntimeException {
    public MaxPersonCountException(String message) {
        super(message);
    }
}
