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
        swap(vetor, index, randomIndex)
    }
    
    return vetor
}

bubble_sort = (vetor) => {
    for(i = 0; i < vetor.length; i++){
        let troca = false
        for(j = 0; j < vetor.length -1; j++){
            if (vetor[j] > vetor[j + 1]){
                swap(vetor, j, j + 1)
                troca = true
            }
        }
        if(!troca){
            break;
        }
        console.log(vetor)
    }

    return vetor
}

selection_sort = (vetor) => {
    for(i = 0; i < vetor.length; i++){
        let menor = i
        for(j = i + 1; j < vetor.length; j++){
            if(vetor[j] < vetor[menor]){
                menor = j
            }
        }
        if (menor != i){
            swap(vetor, i, menor)
        }
        console.log(vetor)
    }

    return vetor
}

quick_sort = (vetor, posInicial, posFinal) => {
    if (posInicial >= posFinal) return;

    if (posInicial < posFinal){
        let index = particionamento(vetor, posInicial, posFinal, posFinal)
        quick_sort(vetor, posInicial, index - 1)
        quick_sort(vetor, index + 1, posFinal)
    }

    return vetor
}

particionamento = (vetor, posInicial, posFinal, pivot) => {
    let pivotIndex = posInicial
    let i = posInicial - 1

    while (pivotIndex < pivot) {
      if (vetor[pivotIndex] > vetor[pivot]) {
        pivotIndex++
      }
      else {
        i++
        swap(vetor, pivotIndex, i);
        pivotIndex++
      }
    }
    
    swap(vetor, i + 1, pivot);
    console.log(vetor)
    return i + 1
}