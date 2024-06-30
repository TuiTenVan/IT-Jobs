package com.project.jobs.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class TagsEntity extends BaseEntity{
    @Column(name = "tagName")
    private String tagName;
    @ManyToOne
    @JoinColumn(name = "idJob")
    private JobEntity job;
}
