package com.gudev.referral.dto;

import lombok.Data;

import javax.persistence.Column;

@Data
public class UserDto {

    private Long id;

    private String username;

    private String name;
    private String surname;
    private String mail;
    private String referralCode;
    private String referredByCode;

}
