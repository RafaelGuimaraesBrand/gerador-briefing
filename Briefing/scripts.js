const formatoSelect = document.getElementById('formato');
        const canaisSelect = document.getElementById('canais');
        const gerarBriefingBtn = document.getElementById('gerarBriefing');
        const gerarPDFBtn = document.getElementById('gerarPDF');

        canaisSelect.addEventListener('change', () => {
            formatoSelect.innerHTML = '';
            const selectedCanal = canaisSelect.value;

            if (selectedCanal === 'Facebook' || selectedCanal === 'Instagram') {
                const formatos = ['Criativo Estático', 'Video', 'Carrossel'];
                formatos.forEach(formato => {
                    const option = document.createElement('option');
                    option.value = formato;
                    option.textContent = formato;
                    formatoSelect.appendChild(option);
                });
            } else if (selectedCanal === 'Google Display') {
                const formatos = ['Responsivo', 'Gráfico'];
                formatos.forEach(formato => {
                    const option = document.createElement('option');
                    option.value = formato;
                    option.textContent = formato;
                    formatoSelect.appendChild(option);
                });
            } else if (selectedCanal === 'YouTube') {
                const formatos = ['Puláveis', 'Não Puláveis (15s ou 20s)', 'Bumper (Até 6s)'];
                formatos.forEach(formato => {
                    const option = document.createElement('option');
                    option.value = formato;
                    option.textContent = formato;
                    formatoSelect.appendChild(option);
                });
            } else if (selectedCanal === 'LinkedIn') {
                const formatos = ['Criativo Estático', 'Video', 'Carrossel', 'Documento'];
                formatos.forEach(formato => {
                    const option = document.createElement('option');
                    option.value = formato;
                    option.textContent = formato;
                    formatoSelect.appendChild(option);
                });
            } else if (selectedCanal === 'TikTok') {
                const formatos = ['Video'];
                formatos.forEach(formato => {
                    const option = document.createElement('option');
                    option.value = formato;
                    option.textContent = formato;
                    formatoSelect.appendChild(option);
                });
            }
        });

            // Seu código de preenchimento dos formatos aqui
        

            gerarBriefingBtn.addEventListener('click', () => {
                const responsavel = document.getElementById('responsavel').value;
                const cliente = document.getElementById('cliente').value;
                const objetivo = document.getElementById('objetivo').value;
                const canais = canaisSelect.value;
                const formato = formatoSelect.value;
                const posicionamento = Array.from(document.querySelectorAll('[name="posicionamento[]"]:checked')).map(checkbox => checkbox.value).join(', ');
                const observacoes = document.getElementById('observacoes').value;

                const resultadoDiv = document.getElementById('resultado');
                resultadoDiv.innerHTML = `
                    <h3>Briefing Gerado:</h3>
                    <p><strong>1. Responsável:</strong> ${responsavel}</p>
                    <p><strong>2. Cliente:</strong> ${cliente}</p>
                    <p><strong>3. Objetivo da Campanha:</strong> ${objetivo}</p>
                    <p><strong>4. Canais:</strong> ${canais}</p>
                    <p><strong>5. Formato:</strong> ${formato}</p>
                    <p><strong>6. Posicionamento:</strong> ${posicionamento}</p>
                    <p><strong>Observações importantes:</strong> ${observacoes}</p>
                `;
            });

            gerarPDFBtn.addEventListener('click', () => {
            const responsavel = document.getElementById('responsavel').value;
            const cliente = document.getElementById('cliente').value;
            const objetivo = document.getElementById('objetivo').value;
            const canais = canaisSelect.value;
            const formato = formatoSelect.value;
            const posicionamento = Array.from(document.querySelectorAll('[name="posicionamento[]"]:checked')).map(checkbox => checkbox.value).join(', ');
            const observacoes = document.getElementById('observacoes').value;

            window.jsPDF = window.jspdf.jsPDF;
            
            const pdf = new jsPDF(); 
            pdf.setFontSize(14);
            pdf.text(`1. Responsável: ${responsavel}`, 15, 20);
            pdf.text(`2. Cliente: ${cliente}`, 15, 30);
            pdf.text(`3. Objetivo da Campanha: ${objetivo}`, 15, 40);
            pdf.text(`4. Canais: ${canais}`, 15, 50);
            pdf.text(`5. Formato: ${formato}`, 15, 60);
            pdf.text(`6. Posicionamento: ${posicionamento}`, 15, 70);
            pdf.text(`Observações importantes: ${observacoes}`, 15, 80);

            pdf.save('briefing.pdf'); 

            });
           
            

               

    
           
        