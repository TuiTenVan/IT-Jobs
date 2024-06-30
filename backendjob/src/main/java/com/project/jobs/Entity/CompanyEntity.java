package com.project.jobs.Entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class CompanyEntity extends BaseEntity {
    @Column(name = "companyName")
    private String companyName;
    @Column(name = "phone")
    private String phone;
    @Column(name = "address")
    private String address;
    @Column(name = "email")
    private String email;
    @Column(name = "password")
    private String password;
    @Column(name = "token")
    private String token;
    @Column(name = "quantityPeople")
    private int quantityPeople;
    @Column(name = "detail")
    private String detail;
    @Column(name = "description")
    private String description;
    @Column(name = "website")
    private String website;
    @Column(name = "workingTime")
    private String workingTime;
    @OneToMany(mappedBy = "company", fetch = FetchType.LAZY)
    private List<JobEntity> jobs;
    @OneToMany(mappedBy = "company", fetch = FetchType.LAZY)
    private List<CvEntity> cvs;
}
