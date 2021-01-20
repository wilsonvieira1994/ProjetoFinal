package backend.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import backend.entities.Fornecedor;
import backend.repositories.FornecedorRepository;

@Service
public class FornecedorService {
	@Autowired
	private FornecedorRepository repositorio;

	public List<Fornecedor> findAll() {
		return repositorio.findAll();
	}

	public Fornecedor findById(Integer id) {
		Optional<Fornecedor> obj = repositorio.findById(id);
		return obj.orElseThrow(null);
	}

	public Fornecedor save(Fornecedor obj) {
		obj.setId(null);
		return repositorio.save(obj);
	}

	public Fornecedor update(Fornecedor obj) {
		Fornecedor novoObj = repositorio.getOne(obj.getId());
		novoObj.setNome(obj.getNome());
		novoObj.setCnpj(obj.getCnpj());
		novoObj.setEmail(obj.getEmail());
		novoObj.setEndereco(obj.getEndereco());
		novoObj.setTelefone(obj.getTelefone());
		return repositorio.save(novoObj);
	}

	public void deleteById(Integer id) {
		repositorio.deleteById(id);
	}

}
