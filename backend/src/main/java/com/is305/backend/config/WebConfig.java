package com.is305.backend.config;

import com.is305.backend.interceptor.LoginStatusInterceptor;
import com.is305.backend.interceptor.UsernameInterceptor;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import javax.annotation.Resource;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Resource
    LoginStatusInterceptor loginStatusInterceptor;
    @Resource
    UsernameInterceptor usernameInterceptor;


    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        WebMvcConfigurer.super.addInterceptors(registry);
        registry.addInterceptor(loginStatusInterceptor).addPathPatterns("/**");
        registry.addInterceptor(usernameInterceptor).addPathPatterns("/follower/**");
    }

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        WebMvcConfigurer.super.addCorsMappings(registry);
        registry.addMapping("/**").allowedOriginPatterns("*").allowedHeaders("*").allowedHeaders("*").allowCredentials(true).maxAge(10000);
    }

}
