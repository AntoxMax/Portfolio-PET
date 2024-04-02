import React from "react";
import { Button } from "../../../../ui/button/Button";

import s from "../../addProject.module.scss";

type ButtonsProps = {
  onClickEditProject: () => Promise<void>;
  onClickCancel: () => void;
};

export const Buttons: React.FC<ButtonsProps> = ({
  onClickEditProject,
  onClickCancel,
}) => {
  return (
    <div className={s.buttons}>
      <Button onClick={() => onClickEditProject()} background={true}>
        Сохранить
      </Button>
      <Button onClick={() => onClickCancel()} background={true}>
        Отменить
      </Button>
    </div>
  );
};
