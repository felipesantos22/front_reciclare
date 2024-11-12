import React from "react";
import {
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Switch,
  Button,
  Typography,
  Box,
} from "@mui/material";
import { Editor } from "@tinymce/tinymce-react"; // Editor WYSIWYG

function Form() {
  return (
    <Box sx={{ width: "95%", margin: "auto", p: 3 }}>
      {/* Título da seção */}
      <Typography variant="h6" gutterBottom>
        Criação de comunicado
      </Typography>

      {/* Campo de Operações */}
      <FormControl fullWidth margin="normal">
        <TextField
          label="Operações"
          placeholder="Selecione operações para carregar as respectivas carteiras"
          variant="outlined"
        />
      </FormControl>

      {/* Detalhes do comunicado */}
      <Typography variant="h6" gutterBottom>
        Detalhes do comunicado
      </Typography>

      <FormControl fullWidth margin="normal">
        <TextField
          label="Título"
          placeholder="Insira um título para o comunicado"
          variant="outlined"
        />
      </FormControl>

      {/* Tipo de Usuário */}
      <FormControl fullWidth margin="normal">
        <InputLabel>Tipo de Usuário</InputLabel>
        <Select label="Tipo de Usuário" defaultValue="">
          <MenuItem value="">Selecione os tipos de usuário</MenuItem>
          {/* Outras opções */}
        </Select>
      </FormControl>

      {/* Procedimento */}
      <FormControl fullWidth margin="normal">
        <InputLabel>Selecione o Procedimento</InputLabel>
        <Select label="Selecione o Procedimento" defaultValue="">
          <MenuItem value="">Select...</MenuItem>
          {/* Outras opções */}
        </Select>
      </FormControl>

      {/* Conteúdo do comunicado */}
      <Typography variant="body1" gutterBottom>
        Conteúdo do comunicado
      </Typography>
      <Editor
        apiKey="YOUR_TINYMCE_API_KEY"
        init={{
          height: 200,
          menubar: false,
        }}
      />

      {/* Breve descrição */}
      <Typography variant="body1" gutterBottom>
        Breve descrição
      </Typography>
      <Editor
        apiKey="YOUR_TINYMCE_API_KEY"
        init={{
          height: 100,
          menubar: false,
        }}
      />

      {/* Switch para gerar POP-UP */}
      <FormControl margin="normal" fullWidth>
        <Typography variant="body2">Conteúdo irá gerar POP-UP?</Typography>
        <Switch defaultChecked />
      </FormControl>

      {/* Data limite */}
      <FormControl fullWidth margin="normal">
        <TextField
          label="Escolha a data limite para a leitura do POP-UP"
          type="date"
          InputLabelProps={{ shrink: true }}
        />
      </FormControl>

      {/* Botões para adicionar arquivos/imagem */}
      <Box display="flex" justifyContent="space-between" marginTop={2}>
        <Button variant="outlined" color="primary">
          Inserir Arquivos do Comunicado
        </Button>
        <Button variant="contained" color="secondary">
          Inserir Imagem para o Card
        </Button>
      </Box>

      {/* Botão de Enviar Comunicado */}
      <Box display="flex" justifyContent="right" marginTop={4}>
        <Button variant="contained" color="primary" size="large">
          Enviar Comunicado
        </Button>
      </Box>
    </Box>
  );
}

export default Form;
