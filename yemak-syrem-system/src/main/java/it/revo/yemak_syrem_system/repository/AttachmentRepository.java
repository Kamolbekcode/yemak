package it.revo.yemak_syrem_system.repository;

import it.revo.yemak_syrem_system.entity.Attachment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface AttachmentRepository extends JpaRepository<Attachment, UUID> {
}
