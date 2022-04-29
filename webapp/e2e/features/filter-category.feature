Feature: Filtrar por categoria productos

Scenario: Usuario no logeado filtra productos
  Given Dado un usuario no logeado se filtra por categoria
  When Filtro por categoria
  Then Se ve solo el producto filtrado por categoria