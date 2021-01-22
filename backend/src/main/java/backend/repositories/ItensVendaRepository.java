package backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import backend.entities.ItensVenda;

@Repository
public interface ItensVendaRepository extends JpaRepository<ItensVenda, Integer>{

}
