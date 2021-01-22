package backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import backend.entities.Marca;

@Repository
public interface MarcaRepository extends JpaRepository<Marca, Integer>{
	
}
