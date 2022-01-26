package com.gudev.referral.request;


import lombok.Data;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Data
public class CreateUserRequest {


    @NotNull @NotEmpty
    private String username;

    @NotNull @NotEmpty
    private String referredByCode;

    @NotNull @NotEmpty
    private String name;

    private String surname;
    private String mail;

}
