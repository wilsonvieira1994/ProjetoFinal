package backend.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import backend.entities.ItensVenda;
import backend.repositories.ItensVendaRepository;

@Service
public class ItensVendaService {
	@Autowired
	private ItensVendaRepository repositorio;

	public List<ItensVenda> findAll() {
		return repositorio.findAll();
	}

	public ItensVenda findById(Integer id) {
		Optional<ItensVenda> obj = repositorio.findById(id);
		return obj.orElseThrow(null);
	}

	public ItensVenda save(ItensVenda obj) {
		obj.setId(null);
		return repositorio.save(obj);
	}

	public ItensVenda update(ItensVenda obj) {
		ItensVenda novoObj = repositorio.getOne(obj.getId());
		novoObj.setQuantidade(obj.getQuantidade());
		return repositorio.save(novoObj);
	}

	public void deleteById(Integer id) {
		repositorio.deleteById(id);
	}

}
