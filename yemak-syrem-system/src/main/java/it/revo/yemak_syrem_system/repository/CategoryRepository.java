package it.revo.yemak_syrem_system.repository;

import it.revo.yemak_syrem_system.entity.Category;
import it.revo.yemak_syrem_system.projection.CustomCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path = "category", collectionResourceRel = "list", excerptProjection = CustomCategory.class)
public interface CategoryRepository extends JpaRepository<Category, Integer> {
}
