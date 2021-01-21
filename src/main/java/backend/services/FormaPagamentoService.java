package backend.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import backend.entities.FormaPagamento;
import backend.repositories.FormaPagamentoRepository;

@Service
public class FormaPagamentoService {
	@Autowired
	private FormaPagamentoRepository repositorio;

	public List<FormaPagamento> findAll() {
		return repositorio.findAll();
	}

	public FormaPagamento findById(Integer id) {
		Optional<FormaPagamento> obj = repositorio.findById(id);
		return obj.orElseThrow(null);
	}

	public FormaPagamento save(FormaPagamento obj) {
		obj.setId(null);
		return repositorio.save(obj);
	}

	public FormaPagamento update(FormaPagamento obj) {
		FormaPagamento novoObj = repositorio.getOne(obj.getId());
		novoObj.setAtivo(obj.getAtivo());
		novoObj.setDescricao(obj.getDescricao());
		novoObj.setForma(obj.getForma());
		return repositorio.save(novoObj);
	}

	public void deleteById(Integer id) {
		repositorio.deleteById(id);
	}

}
