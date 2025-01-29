# Modelo-de-loja
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lojinha</title>
    <link rel="stylesheet" href="css/bootstrap.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <link rel="stylesheet" href="css/style.css">
    <script src="js/funcoes.js"></script>

</head>
<body>

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><i class="bi bi-amazon"></i> Amazon</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    

    <div class="container">

        <h1 class="text-center" style="margin: 5%;"> <i class="bi bi-bag-check" id="bag"></i> Amazon</h1>

        <table class="table table-hover"> 
            <thead>
                <th>Imagem</th>
                <th>Produto</th>
                <th>Valor Unitário</th>
                <th>Qtd</th>
                <th>Total</th>     
            </thead>

            <tbody>
                <tr>
                    <td><img src="img/Celular.jpg" alt="Celular" width="200px"></td>
                    <td>
                        <div><span class="produto-item">Iphone 15</span></div>
                        <div>Armazenamento: 128gb</div>
                        <div>Memória: 16gb</div>
                        <div>Cor: Preto</div>  
                    </td>
                    <td id="valor_1">R$ 5000</td>
                    <td>
                        <span class="badge text-bg-danger" onclick="alterarQtd(1, '-')"><i class="bi bi-dash"></i></span>
                        <span id="qtd_1">0</span>
                        <span class="badge text-bg-success" onclick="alterarQtd(1, '+')"><i class="bi bi-plus"></i></span>
                     </td>
                    <td id="total_1">0</td>
                </tr>

                <tr>
                    <td><img src="img/notebook.jfif" alt="notebook" width="200px"></td>
                    <td>
                        <div><span class="produto-item">notebook Acer Aspire 5</span></div>
                        <div>Armazenamento: 1Tb</div>
                        <div>Memória: 16gb</div>
                        <div>Tela: 16.5"</div>
                        <div>Cor: Preto</div> 
                    </td>
                    <td id="valor_2">R$ 4.500</td>
                    <td>
                    <span class="badge text-bg-danger" onclick="alterarQtd(2, '-')"><i class= "bi bi-dash" ></i></span>
                     <span id="qtd_2">0</span>
                    <span class="badge text-bg-success" onclick="alterarQtd(2, '+')"><i class="bi bi-plus"></i></span>
                     </td>
                    <td id="total_2">0</td>
            </tr>

                <tr>
                    <td><img src="img/tv.png" alt="TV" width="200px"></td>
                    <td>
                        <div><span class="produto-item">Smart TV Samsung</span></div>
                        <div>Tela 50"</div>
                        <div>Cor: Preto</div> 
                    </td>
                    <td id="valor_3">R$ 3.000</td>
                    <td>
                        <span class="badge text-bg-danger" onclick="alterarQtd(3, '-')"><i class="bi bi-dash" ></i></span>
                        <span id="qtd_3">0</span>
                        <span class="badge text-bg-success" onclick="alterarQtd(3, '+')"><i class="bi bi-plus"></i></span>
                     </td>
                    <td id="total_3">0</td>
                </tr> 
            </tbody>
        </table>

    <footer class="text-center">

        <span class="Subtotal"><i class="bi bi-cart"></i> Subtotal: <span id="Subtotal">R$ 0</span ></span>

    </footer>
</div>

</body>
</html>
