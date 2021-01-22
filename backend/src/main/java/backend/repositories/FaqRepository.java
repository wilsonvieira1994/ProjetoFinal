package backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import backend.entities.Faq;

@Repository
public interface FaqRepository extends JpaRepository<Faq, Integer>{

}
