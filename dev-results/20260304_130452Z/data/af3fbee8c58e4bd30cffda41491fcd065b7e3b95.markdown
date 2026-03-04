# Page snapshot

```yaml
- generic [ref=e5]:
  - img [ref=e6]
  - heading "Cadastro" [level=2] [ref=e7]
  - alert [ref=e8]:
    - button "Close" [ref=e9] [cursor=pointer]: ×
    - text: Email deve ser um email válido
  - textbox "Digite seu nome" [ref=e11]: Cedric Moore Sr.
  - textbox "Digite seu email" [ref=e13]: cedricmooresr.@playwright-lab.com
  - textbox "Digite sua senha" [ref=e15]: ArTa_9PuCdS_
  - generic [ref=e17]:
    - checkbox "Cadastrar como administrador?" [ref=e18]
    - generic [ref=e19]: Cadastrar como administrador?
  - button "Cadastrar" [active] [ref=e21] [cursor=pointer]
  - generic [ref=e22]:
    - text: Já é cadastrado?
    - generic [ref=e23] [cursor=pointer]: Entrar
```