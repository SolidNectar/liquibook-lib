from setuptools import setup
  
setup(
    name='liquibook',
    version='0.1',
    description='Liquibook lib',
    author='Eric Newhuis',
    author_email='freewill@librem.one',
    packages=['python'],
    install_requires=[
        'protobuf',
    ],
)