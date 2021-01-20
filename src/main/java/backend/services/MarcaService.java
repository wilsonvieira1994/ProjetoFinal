package backend.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import backend.entities.Marca;
import backend.repositories.MarcaRepository;

@Service
public class MarcaService {
	@Autowired
	private MarcaRepository repositorio;

	public List<Marca> findAll() {
		return repositorio.findAll();
	}

	public Marca findById(Integer id) {
		Optional<Marca> obj = repositorio.findById(id);
		return obj.orElseThrow(null);
	}

	public Marca save(Marca obj) {
		obj.setId(null);
		return repositorio.save(obj);
	}

	public Marca update(Marca obj) {
		Marca novoObj = repositorio.getOne(obj.getId());
		novoObj.setNome(obj.getNome());
		novoObj.setDescricao(obj.getDescricao());
		return repositorio.save(novoObj);
	}

	public void deleteById(Integer id) {
		repositorio.deleteById(id);
	}

}
