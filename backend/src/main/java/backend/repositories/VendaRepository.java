package backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import backend.entities.Venda;

@Repository
public interface VendaRepository extends JpaRepository<Venda, Integer>{

}
