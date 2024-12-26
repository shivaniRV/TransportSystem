import {useIntl} from 'react-intl'
import {KTIcon} from '../../../helpers'
import {AsideMenuItemWithSub} from './AsideMenuItemWithSub'
import {AsideMenuItem} from '../aside/AsideMenuItem';
export function AsideMenuMainUpdated() {
  const intl = useIntl()
  return (
    <>
      <AsideMenuItem
        to='/home'
        icon='element-11'
        title="Home"
      />
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          {/* <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Jobs and Applicants</span> */}
        </div>
      </div>
      <AsideMenuItem to='/job-management' icon='element-11' title="Job Management"/>
      <AsideMenuItem to='applicants' icon='element-11' title="Applicants" />
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Quiz</span>
        </div>
      </div>
      <AsideMenuItem to='/quiz/questions' icon='shield-tick' title='Quiz Questions' />
      <AsideMenuItem to='/quiz/quizzes' icon='shield-tick' title='Quizzes' />
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>User and Roles</span>
        </div>
      </div>
      <AsideMenuItem to='user/user-management' icon='shield-tick' title='User Management' />
      
      
    </>
  )
}