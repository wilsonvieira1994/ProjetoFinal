package backend.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import backend.entities.Produto;
import backend.repositories.ProdutoRepository;

@Service
public class ProdutoService {
	@Autowired
	private ProdutoRepository repositorio;

	public List<Produto> findAll() {
		return repositorio.findAll();
	}

	public Produto findById(Integer id) {
		Optional<Produto> obj = repositorio.findById(id);
		return obj.orElseThrow(null);
	}

	public Produto save(Produto obj) {
		obj.setId(null);
		return repositorio.save(obj);
	}

	public Produto update(Produto obj) {
		Produto novoObj = repositorio.getOne(obj.getId());
		novoObj.setNome(obj.getNome());
		novoObj.setDescricao(obj.getDescricao());
		novoObj.setQuantidade(obj.getQuantidade());
		novoObj.setValorUnitario(obj.getValorUnitario());
		novoObj.setCategoria(obj.getCategoria());
		novoObj.setMarca(obj.getMarca());
		novoObj.setFornecedor(obj.getFornecedor());
		return repositorio.save(novoObj);
	}

	public void deleteById(Integer id) {
		repositorio.deleteById(id);
	}

}
