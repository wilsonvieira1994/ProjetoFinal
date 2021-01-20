package backend.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import backend.entities.Venda;
import backend.repositories.VendaRepository;

@Service
public class VendaService {
	@Autowired
	private VendaRepository repositorio;

	public List<Venda> findAll() {
		return repositorio.findAll();
	}

	public Venda findById(Integer id) {
		Optional<Venda> obj = repositorio.findById(id);
		return obj.orElseThrow(null);
	}

	public Venda save(Venda obj) {
		obj.setId(null);
		return repositorio.save(obj);
	}

	public Venda update(Venda obj) {
		Venda novoObj = repositorio.getOne(obj.getId());
		
		return repositorio.save(novoObj);
	}

	public void deleteById(Integer id) {
		repositorio.deleteById(id);
	}

}
