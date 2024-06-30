package com.project.jobs.Entity;

import jakarta.persistence.*;
import lombok.*;


@Entity
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class CvEntity extends BaseEntity {
    @Column(name = "name")
    private String name;
    @Column(name = "phone")
    private String phone;
    @Column(name = "email")
    private String email;
    @Column(name = "statusRead")
    private boolean statusRead;
    @Column(name = "description")
    private String description;
    @Column(name = "linkProject")
    private String linkProject;
    @Column(name = "city")
    private String city;
    @ManyToOne
    @JoinColumn(name = "idCompany")
    private CompanyEntity company;
    @ManyToOne
    @JoinColumn(name = "idJob")
    private JobEntity job;
}
