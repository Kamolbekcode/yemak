package it.revo.yemak_syrem_system.repository;

import it.revo.yemak_syrem_system.entity.AttachmentContent;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface AttachmentContentRepository extends JpaRepository<AttachmentContent, UUID> {
    AttachmentContent findByAttachmentId(UUID attachment_id);
}
