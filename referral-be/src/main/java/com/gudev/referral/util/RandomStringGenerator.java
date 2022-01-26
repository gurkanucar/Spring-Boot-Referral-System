package com.gudev.referral.util;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.security.SecureRandom;
import java.util.Collections;
import java.util.stream.Collectors;

@Component
public class RandomStringGenerator {

    @Value("${codeLength}")
    private int codeLegnth;

    public String generate() {

        SecureRandom random = new SecureRandom();
        String generated = "";

        var letters = "abcdefghijklmnopqrstyvwz0123456789"
                .toUpperCase()
                .chars()
                .mapToObj(x -> (char) x)
                .collect(Collectors.toList());

        Collections.shuffle(letters);

        for (int i = 0; i < codeLegnth; i++) {
            generated += letters.get(i);
        }
        return generated;
    }


}
