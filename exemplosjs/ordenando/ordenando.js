swap = (vetor, pos1, pos2) => {
    let temp = vetor[pos1]
    vetor[pos1] = vetor[pos2]
    vetor[pos2] = temp
    return vetor
}

shuffle = (vetor, qttroca) => {
    let index = vetor.length, randomIndex;

    for(i = 0; i < index && qttroca > 0;  i++){
        randomIndex = Math.floor(Math.random() * index);
        index--;

        [vetor[index], vetor[randomIndex]] = [vetor[randomIndex], vetor[index]]
    }
    
    return vetor
}

bubble_sort = (vetor_inteiros) => {
    let vetor_bubble = vetor_inteiros.map(Number)

    for(i = 0; i < vetor_bubble.length; i++){
        let troca = false
        for(j = 0; j < vetor_bubble.length -1; j++){

            if (vetor_bubble[j] > vetor_bubble[j + 1]){
                vetor_bubble = swap(vetor_bubble, j, j + 1)
                troca = true
            }
        }
        if(!troca){
            break;
        }
    }
    return vetor_bubble.map(String)
}

selection_sort = (vetor_inteiros) => {
    let vetor_selection = vetor_inteiros.map(Number)
    for(i = 0; i < vetor_selection.length; i++){
        let menor = i
        for(j = i + 1; j < vetor_selection.length; j++){
            if(vetor_selection[j] < vetor_selection[menor]){
                menor = j
            }
        }
        if (menor != i){
            vetor_selection = swap(vetor_selection, i, menor)
        }
    }
    console.log(vetor_selection)
    return vetor_selection.map(String)
}

quick_sort = (vetor, posInicial, posFinal) => {
    let vetor_quick = vetor.map(Number)
    if (posFinal - posInicial > 1){
        let index = particionamento(vetor_quick, posInicial, posFinal)

        quick_sort(vetor_quick, posInicial, index)
        quick_sort(vetor_quick, index + 1, posFinal)
    }

    return vetor_quick.map(String)
}

particionamento = (vetor, posInicial, posFinal) => {
    let pivot = posInicial
    let pivotIndex = posInicial

    for(let i = posInicial + 1; i < posFinal; i++){
        if(vetor[i] < vetor[pivot]){
            pivotIndex++;
            vetor = swap(vetor, pivotIndex, i)
        }
    }
    vetor = swap(vetor, pivot, pivotIndex)
    return pivotIndex
}

