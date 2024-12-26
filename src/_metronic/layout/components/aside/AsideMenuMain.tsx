import {useIntl} from 'react-intl'
import {KTIcon} from '../../../helpers'
import {AsideMenuItemWithSub} from './AsideMenuItemWithSub'
import {AsideMenuItem} from '../aside/AsideMenuItem';
export function AsideMenuMainUpdated() {
  const intl = useIntl()
  return (
    <>
      <AsideMenuItem
        to='/AdminDashboard'
        icon='element-11'
        title="Dashboard"
      />
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          {/* <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Jobs and Applicants</span> */}
        </div>
      </div>
      <AsideMenuItem to='/job-management' icon='element-11' title="Ships"/>
      <AsideMenuItem to='applicants' icon='element-11' title="Users" />
      <div className='menu-item'>
        {/* <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Quiz</span>
        </div> */}
      </div>
      <AsideMenuItem to='/quiz/questions' icon='element-11'title='Employees' />
      <AsideMenuItem to='/quiz/quizzes' icon='element-11' title='Revenue' />
      <AsideMenuItem to='user/user-management' icon='element-11' title='FAQ & Queries' />
      
      
    </>
  )
}