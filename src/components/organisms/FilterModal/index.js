import React, { useState } from 'react';
import { InputSectionLabel, Button } from '../../atoms';
import { Modal, Input } from '../../molecules';
import { FilterContainer, InputsRowContainer, InputRowItem } from './styles';
import { useHousesHooks } from '../../../services/hooks';

export const FilterModal = ({ visible, onClose }) => {
  const { onFilterHouses } = useHousesHooks();
  const [sizeMin, setSizeMin] = useState();
  const [sizeMax, setSizeMax] = useState();
  const [priceMin, setPriceMin] = useState();
  const [priceMax, setPriceMax] = useState();
  const [bedsMin, setBedsMin] = useState();
  const [bathsMin, setBathsMin] = useState();

  const onClickApply = () => {
    onFilterHouses({
      sizeMin,
      sizeMax,
      priceMin,
      priceMax,
      bedsMin,
      bathsMin,
    });
    onClose();
  };

  return (
    <Modal visible={visible} onClose={onClose} title="Filtrar">
      <FilterContainer>
        <InputSectionLabel mt={12} mb={6}>
          Tamanho
        </InputSectionLabel>
        <InputsRowContainer>
          <InputRowItem>
            <Input
              value={sizeMin}
              onChangeText={t => setSizeMin(t)}
              label=" Mínimo"
              placeholder="Ex: 77"
              keyboardType="numeric"
            />
          </InputRowItem>
          <InputRowItem>
            <Input
              value={sizeMax}
              onChangeText={t => setSizeMax(t)}
              label=" Máximo"
              placeholder="Ex: 300"
              keyboardType="numeric"
            />
          </InputRowItem>
        </InputsRowContainer>
        <InputSectionLabel mt={12} mb={6}>
          Preço
        </InputSectionLabel>
        <InputsRowContainer>
          <InputRowItem>
            <Input
              value={priceMin}
              onChangeText={t => setPriceMin(t)}
              label=" Mínimo"
              placeholder="Ex: 500"
              keyboardType="numeric"
            />
          </InputRowItem>
          <InputRowItem>
            <Input
              value={priceMax}
              onChangeText={t => setPriceMax(t)}
              label=" Máximo"
              placeholder="Ex: 3000"
              keyboardType="numeric"
            />
          </InputRowItem>
        </InputsRowContainer>
        <InputSectionLabel mt={12} mb={6}>
          Quartos
        </InputSectionLabel>
        <InputsRowContainer>
          <InputRowItem>
            <Input
              value={bedsMin}
              onChangeText={t => setBedsMin(t)}
              label=" Mínimo"
              placeholder="Ex: 4"
              keyboardType="numeric"
            />
          </InputRowItem>
        </InputsRowContainer>
        <InputSectionLabel mt={12} mb={6}>
          Banheiros
        </InputSectionLabel>
        <InputsRowContainer>
          <InputRowItem>
            <Input
              value={bathsMin}
              onChangeText={t => setBathsMin(t)}
              label=" Mínimo"
              placeholder="Ex: 2 "
              keyboardType="numeric"
            />
          </InputRowItem>
        </InputsRowContainer>
      </FilterContainer>
      <Button onPress={onClickApply} mt={24}>
        Aplicar
      </Button>
    </Modal>
  );
};
