Feature: Filtrar por nombre productos

Scenario: Usuario no logeado filtra productos
  Given Dado un usuario no logeado se filtra por nombre
  When Filtro por nombre 
  Then Se ve solo el producto filtrado