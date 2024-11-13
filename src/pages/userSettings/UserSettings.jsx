import { SettingForm } from '../../components/settingForm/SettingForm';

function UserSettings() {
  return (
    <SettingForm title={'정보 입력'} btnText={'회원가입하기'} full={true} />
  );
}

export default UserSettings;
