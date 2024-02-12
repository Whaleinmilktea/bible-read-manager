import { Input } from "@chakra-ui/react";
import styled from "styled-components";

const CycleInputForm = () => {
  return (
    <Wrapper>
      <>cycle 입력 form</>
      <Input
        variant="field"
        placeholder="시작할 성경을 입력해주세요 ex) 창세기"
      />
      <Input type="number" variant="field" placeholder="시작할 장을 입력해주세요 ex) 5" />
      <Input type="number" variant="field" placeholder="몇장씩 읽으시겠어요? ex) 3" />
      <Input
        variant="field"
        placeholder="시작할 날짜를 입력해주세요"
        size="md"
        type="date"
      />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default CycleInputForm;
