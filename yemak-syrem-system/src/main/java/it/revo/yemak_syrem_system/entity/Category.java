package it.revo.yemak_syrem_system.entity;

import it.revo.yemak_syrem_system.entity.templates.AbsNameEntity;
import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Category extends AbsNameEntity {
    private UUID photoId;
}
