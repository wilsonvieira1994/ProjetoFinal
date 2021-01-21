package backend.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import backend.entities.Cliente;
import backend.repositories.ClienteRepository;

@Service
public class ClienteService {
	@Autowired
	private ClienteRepository repositorio;

	public List<Cliente> findAll() {
		return repositorio.findAll();
	}

	public Cliente findById(Integer id) {
		Optional<Cliente> obj = repositorio.findById(id);
		return obj.orElseThrow(null);
	}

	public Cliente save(Cliente obj) {
		obj.setId(null);
		return repositorio.save(obj);
	}

	public Cliente update(Cliente obj) {
		Cliente novoObj = repositorio.getOne(obj.getId());
		novoObj.setApelido(obj.getApelido());
		novoObj.setCpf(obj.getCpf());
		novoObj.setDataNascimento(obj.getDataNascimento());
		novoObj.setNome(obj.getNome());
		novoObj.setNomeSocial(obj.getNomeSocial());
		novoObj.setSexo(obj.getSexo());
		novoObj.setTelefone(obj.getTelefone());
		novoObj.setEmail(obj.getEmail());
		return repositorio.save(novoObj);
	}

	public void deleteById(Integer id) {
		repositorio.deleteById(id);
	}

}
