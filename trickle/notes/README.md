# Conecta RH e Consultoria - Website

Website profissional para consultoria de recursos humanos.

## Estrutura do Site

### Páginas
- `index.html` - Página principal com todas as seções

### Seções
1. **Hero** - Apresentação principal com call-to-action
2. **Serviços** - 6 serviços principais de RH
3. **Portfólio** - 3 casos de sucesso com resultados
4. **Depoimentos** - 3 depoimentos de clientes
5. **Contato** - Formulário de contato funcional

### Componentes
- `Header.js` - Navegação fixa com menu responsivo
- `Hero.js` - Seção hero com imagem
- `Services.js` - Grid de serviços com ícones
- `Portfolio.js` - Casos de sucesso em cards
- `Testimonials.js` - Depoimentos com avatares
- `ContactForm.js` - Formulário de contato
- `Footer.js` - Rodapé com informações de contato

### Cores do Tema
- Primária: Azul (#2563eb)
- Secundária: Cinza (#64748b)
- Fundo claro: #f8fafc

### Recursos
- Design responsivo (mobile-first)
- Navegação suave entre seções
- Formulário de contato com validação e integração com banco de dados Trickle
- Imagens de alta qualidade do Unsplash

### Banco de Dados
- **Tabela contact_submission**: Armazena todos os envios do formulário de contato
  - Campos: Name, Email, Phone, Message, Status, SubmittedAt
  - Status disponíveis: Novo, Em Andamento, Respondido, Concluído

- **Tabela testimonial**: Gerencia os depoimentos de clientes exibidos no site
  - Campos: Name, Role, Company, Text, Avatar, IsActive, CreatedAt
  - Depoimentos podem ser ativados/desativados através do campo IsActive
  - Carrega dinamicamente apenas depoimentos ativos
