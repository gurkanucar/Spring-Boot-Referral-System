package com.gudev.referral;

import com.gudev.referral.model.User;
import com.gudev.referral.repository.UserRepository;
import com.gudev.referral.util.RandomStringGenerator;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class ReferralApplication implements CommandLineRunner {

    public static void main(String[] args) {
        SpringApplication.run(ReferralApplication.class, args);
    }


    @Bean
    public ModelMapper modelMapper() {
        return new ModelMapper();
    }

    @Autowired
    UserRepository userRepository;

    @Autowired
    RandomStringGenerator randomStringGenerator;

    @Override
    public void run(String... args) throws Exception {
        User user = User.builder()
                .name("gurkan")
                .username("grkn")
                .surname("surname")
                .referralCode(randomStringGenerator.generate())
                .build();
        userRepository.save(user);
    }
}
