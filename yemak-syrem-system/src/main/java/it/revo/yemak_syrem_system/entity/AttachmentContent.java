package it.revo.yemak_syrem_system.entity;

import it.revo.yemak_syrem_system.entity.templates.AbsEntity;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToOne;
import lombok.*;

@EqualsAndHashCode(callSuper = true)
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class AttachmentContent extends AbsEntity {

    @OneToOne
    private Attachment attachment;

    private byte[] bytes;
}
