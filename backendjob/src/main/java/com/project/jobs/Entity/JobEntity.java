package com.project.jobs.Entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class JobEntity extends BaseEntity{
    @Column(name = "name")
    private String name;
    @Column(name = "salary")
    private String salary;
    @Column(name = "description")
    private String description;
    @Column(name = "status")
    private boolean status;
    @OneToMany(mappedBy = "job", fetch = FetchType.LAZY)
    private List<CityEntity> cities;
    @OneToMany(mappedBy = "job", fetch = FetchType.LAZY)
    private List<TagsEntity> tags;
    @OneToMany(mappedBy = "job", fetch = FetchType.LAZY)
    private List<CvEntity> cvs;
    @ManyToOne
    @JoinColumn(name = "idCompany")
    private CompanyEntity company;
}
