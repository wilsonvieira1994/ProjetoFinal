package backend.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import backend.entities.Faq;
import backend.repositories.FaqRepository;

@Service
public class FaqService {
	@Autowired
	private FaqRepository repositorio;

	public List<Faq> findAll() {
		return repositorio.findAll();
	}

	public Faq findById(Integer id) {
		Optional<Faq> obj = repositorio.findById(id);
		return obj.orElseThrow(null);
	}

	public Faq save(Faq obj) {
		obj.setId(null);
		return repositorio.save(obj);
	}

	public Faq update(Faq obj) {
		Faq novoObj = repositorio.getOne(obj.getId());
		novoObj.setTexto(obj.getTexto());
		novoObj.setProduto(obj.getProduto());
		return repositorio.save(novoObj);
	}

	public void deleteById(Integer id) {
		repositorio.deleteById(id);
	}

}
