Add-Type -AssemblyName System.Drawing

$origen = Join-Path $PSScriptRoot "..\readme-images\imc.png"
$destino = Join-Path $PSScriptRoot "..\readme-images\imc-recortada.png"

$imagen = [System.Drawing.Image]::FromFile((Resolve-Path $origen))

try {
    # x e y indican dónde empieza el recorte; ancho y alto indican su tamaño en píxeles.
    $zona = [System.Drawing.Rectangle]::new(115, 25, 535, 555)
    $recorte = New-Object System.Drawing.Bitmap($zona.Width, $zona.Height)

    try {
        $grafico = [System.Drawing.Graphics]::FromImage($recorte)
        try {
            $grafico.DrawImage(
                $imagen,
                [System.Drawing.Rectangle]::new(0, 0, $zona.Width, $zona.Height),
                $zona,
                [System.Drawing.GraphicsUnit]::Pixel
            )
        } finally {
            $grafico.Dispose()
        }

        $recorte.Save($destino, [System.Drawing.Imaging.ImageFormat]::Png)
    } finally {
        $recorte.Dispose()
    }
} finally {
    $imagen.Dispose()
}

Write-Output "Imagen recortada guardada en: $destino"
