package it.revo.yemak_syrem_system.entity;

import it.revo.yemak_syrem_system.entity.templates.AbsEntity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import lombok.*;

@EqualsAndHashCode(callSuper = true)
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Builder
public class Attachment extends AbsEntity {
    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String contentType;

    @Column(nullable = false)
    private Long size;
}
