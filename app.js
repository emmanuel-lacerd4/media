/**
 * Cálculo da média
 * @author Emmanuel L. Nogueira
 */

// Variáveis
let nota1, nota2, media

function calcular() {
    // Entrada
    nota1 = Number(frmMedia.txtNota1.value)
    nota2 = Number(frmMedia.txtNota2.value)

    // Processamento
    media = (nota1 + nota2) / 2

    // Saída
    frmMedia.txtMedia.value = media.toFixed(1)
    // Status
    if (media < 5) {
        frmMedia.txtStatus.value = "REPROVADO!"
    } else {
        frmMedia.txtStatus.value = "APROVADO!"
    }
}