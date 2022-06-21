import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import renderer from 'react-test-renderer';
import GitHubCard from './components/GitHubCard';

test('renders a snapshot', () => {
    const tree = renderer.create(<GitHubCard/>).toJSON()
    expect(tree).toMatchSnapshot()
    
  });

  beforeEach(()=> {
    //sorts eveyrthing back to initial state before each test
    fetch.resetMocks();
})

test('fetch gitHub profile name from GitHub REST API using jest fetch mock', async () => {
    fetch.mockResponseOnce(JSON.stringify({name: 'Alissa M'}))
    render(<GitHubCard/>)
    const gitHubName = await waitFor(() => screen.getByRole('card-title'))
    expect(gitHubName).toHaveTextContent('Alissa M')
})