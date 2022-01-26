package com.gudev.referral.exception;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
public class GeneralExceptionHandler extends ResponseEntityExceptionHandler {

    @Override
    protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex,
                                                                  HttpHeaders headers,
                                                                  HttpStatus status,
                                                                  WebRequest request) {

        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getAllErrors()
                .forEach(x -> {
                    String fieldName = ((FieldError) x).getField();
                    String errorMessage = x.getDefaultMessage();
                    errors.put(fieldName, errorMessage);
                });
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errors);
    }

    @ExceptionHandler(CodeNotFoundException.class)
    public ResponseEntity<?> codeNotFoundException(CodeNotFoundException e) {
        Map<String, String> errors = new HashMap<>();
        errors.put("error", e.getMessage());
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errors);
    }

    @ExceptionHandler(UserNotFoundException.class)
    public ResponseEntity<?> userNotFoundException(UserNotFoundException e) {
        Map<String, String> errors = new HashMap<>();
        errors.put("error", e.getMessage());
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errors);
    }

    @ExceptionHandler(MaxPersonCountException.class)
    public ResponseEntity<?> maxPersonCountException(MaxPersonCountException e) {
        Map<String, String> errors = new HashMap<>();
        errors.put("error", e.getMessage());
        return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body(errors);
    }


}
